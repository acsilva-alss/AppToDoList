import React from 'react';
import './index.css';
export default function SignUp(){

    return(
        <>
            <div className="container">
                <header>
                    <h1>APP ToDo List</h1>
                    <div className="headerMenu">
                        <button>Fazer Login</button>
                        <button className="signUp">Cadastre-se</button>
                    </div>
                </header>
                <div className="content">
                    <h1>O app ToDo List permite 
                        trabalhar com mais 
                        colaboração e ter 
                        mais produtividade.
                    </h1>
                    <p> Com os quadros, listas e cartões do 
                        App ToDo List, você pode organizar e priorizar 
                        seus projetos de um jeito divertido, 
                        flexível e gratificante.
                    </p>
                    <form>
                        <input 
                            id="email" 
                            name="email" 
                            required="required" 
                            type="text"
                        />
                        <input id="botao" type="submit" value="CADASTRAR" />              
                    </form> 
                </div>
            </div>
        </>
    )
}