interface IButton {
    tittle: string;
    type: 'button' | 'submit' | 'reset';
}

export default function Bottom({ tittle, type }: IButton) {//
    return (
        <button className='bg-primary w-full text-black font-medium rounded-md py-2' type='submit'>
            {
                <span> {tittle}</span>
            }
        </button>
    )
}