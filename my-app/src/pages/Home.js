import DataDisplay from '../components/DataDisplay';
import './Home.css';

export default function Home() {
    const wordToDisplay = "Word to be displayed";
    return (
        <>
            <div className='title'>
                <h1>Cyrus Testing</h1>
            </div>
            <div className='WordContainer'>
                <DataDisplay content={wordToDisplay} />
            </div>
        </>
    )
}
