import { useState } from "react";
import {useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, SetIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const blog = {title, body, author};

        SetIsPending(true);

        fetch('http://localhost:8000/blogs',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(blog)
    }).then(() => {
        SetIsPending(false);
        history.push('/')
    } )

    }

    return ( 
        <div className="create">
            <h2>Add A New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                 />
                 <label>Blog Body:</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                 <label>Blog Body:</label>
                 <select 
                 value={author}
                 onChange={(e) => setAuthor(e.target.value)}
                 >
                    <option value="Mario">Mario</option>
                    <option value="chatGPT">GTP</option>
                    <option value="Karol">Karol</option>
                 </select>
                 { !isPending && <button>Add Blog</button>}
                 { isPending && <button disabled>Adding blog...</button>}
                 <p>{title}</p>
                 <p>{body}</p>
                 <p>{author}</p>
            </form>
        </div>
     );
}
 
export default Create;