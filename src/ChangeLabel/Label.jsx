import React, {useState} from 'react';

    const LabelComp = ({ setLabelData }) => {

        const [label, setLabel] = useState('');
        const [color, setColor] = useState('');
        const [bgcolor, setBgColor] = useState('');

        const handleLabelChange = (event) => {
            const { value } = event.target;
            setLabel(value);
        }
        const handleColorChange = (event) => {
            const { value } = event.target;
            setColor(value);
        }
        const handleBgColorChange = (event) => {
            const { value } = event.target;
            setBgColor(value);
        }

        const handleSubmit = (e) => {
            e.preventDefault();
        }
        const onSaveClick = () => {
            // const obj = {
            //     'label': label,
            //     'color': color, 
            //     'bgcolor': bgcolor
            // }
            // console.log(JSON.stringify(obj))
            setLabelData(label, color, bgcolor)
        }


    return <>
    <form onSubmit={handleSubmit}> 
        <h3 className='text-center'>Change the label of 2nd column label</h3>
        <div className='mb-2'>
            <lebel htmlFor="label">Label</lebel>
            <input type="text" name="label" className='form-control mb-3' onChange={handleLabelChange} />
        </div>
        <div className='mb-2'>
            <lebel htmlFor="fname">Color</lebel>
            <input type="text" name="color" className='form-control mb-3' onChange={handleColorChange} />
        </div>
        <div className='mb-2'>
            <lebel htmlFor="fname">Background Color</lebel>
            <input type="text" name="bgcolor" className='form-control mb-3' onChange={handleBgColorChange} />
        </div>
        <button type="button" onClick={onSaveClick} className='btn btn-info mb-2 w-50'>Save</button>
    </form>
    </>

}

export default LabelComp;

