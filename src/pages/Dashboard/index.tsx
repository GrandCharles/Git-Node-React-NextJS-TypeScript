import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Title, Form, Repos, Error } from './styles';

import logo from '../../assets/logo.svg';
import { api } from '../../services/api';

interface GithubRepository {
    full_name: string;
    description: string;
    owner: {
        login: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {
    const [repos, setRepos] = React.useState<GithubRepository[]>(() => {
        const storageRepos = localStorage.getItem('@GitCollection:repositories');

        if (storageRepos) {
            return JSON.parse(storageRepos);
        }
        return [];
    })

    // Valor do Input
    const [newRepo, setNewRepo] = React.useState('');
    // Mesagens de exceção
    const [inputError, setInputError] = React.useState('');

    // Buscando os componenentes do formulário
    const formEl = React.useRef<HTMLFormElement | null>(null);

    // Pagina carrega executa, toda vez que mudar o repos executa o método
    React.useEffect(() => {
        localStorage.setItem('@GitCollection:repositories', JSON.stringify(repos))
    }, [repos]);


    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
        setNewRepo(event.target.value);
        setInputError('');
    }


    // para evitar a renderização reload
    async function handleAddRepos(event: React.FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();

        if (!newRepo) {
            setInputError('informe o username/repositório');
            return;
        }

        try {
            const response = await api.get<GithubRepository>(`repos/${newRepo}`);
            //console.log(response);

            const repository = response.data;

            // adicionar...expred operator repos + response.data
            setRepos([...repos, repository]);

            formEl.current?.reset();
            setNewRepo('');
            setInputError('');
            setInputError('');
        } catch {
            setInputError('Repositório não encontrado no GitHub!');
        }
    }


    return (

        <>
            <img src={logo} alt='GitCollection'  />

            <Title>
                Catálogo de Repositório do GitHub
            </Title>

            <Form hasError={Boolean(inputError)} onSubmit={handleAddRepos} ref={formEl}>

                <input placeholder='username/repository_name' onChange={handleInputChange} />

                <button type="submit" >Buscar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repos>
                {repos.map((repository,index) => (

                    <Link to={`/repositories/${repository.full_name}`}
                        key={repository.full_name + index}>

                        <img src={repository.owner.avatar_url}
                            alt={repository.owner.login}>
                        </img>

                        <div>
                            <strong>{repository.full_name}</strong>

                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={30} />
                    </Link>
                ))}
            </Repos>
        </>

    )
}

export default Dashboard;

