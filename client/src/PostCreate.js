import React, {useState} from 'react';
import axios from 'axios';

export default function PostCreate() {
    const [title, setTitle] = useState('');

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        });
        setTitle('');
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label>title</label>
                    <input value={title} onChange={e => setTitle(e.target.value)} className='form-control' />
                </div>
                <button className='btn btn-primary'>submit</button>
            </form>
        </div>
    )
}
