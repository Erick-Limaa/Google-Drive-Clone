import {CldUploadWidget} from 'next-cloudinary';

const SideBar = ({onHandleNewUpload}) =>{
    return (
       <article className='side-bar'>
            <CldUploadWidget
                uploadPreset='demo_upload'
                onSuccess={result =>{
                    console.log(result);
                    onHandleNewUpload(result.info)
                }}
                
                onQueuesEnd={(result, {widget}) =>{
                    widget.close();
                }}
            >
                {({ open }) =>{
                    function handleOnClick(){
                        open();
                    }
                    return(
                        <button onClick={handleOnClick} className='new-button'>+ Novo</button>
                    )
                }}
            </CldUploadWidget>

            <ul>
                <li>Início</li>
                <li>Atividades</li>
                <li>Área de Trabalho</li>
                <br/>
                <li>Meu Drive</li>
                <li>Drives Compartilhados</li>
                <br/>
                <li>Compartilhe Comigo</li>
                <li>Recente</li>
                <li>Com Estrela</li>
                <br/>
                <li>Spam</li>
                <li>Lixeira</li>
                <li>Armazenamento</li>
            </ul>
       </article>
    )

}
export default SideBar;