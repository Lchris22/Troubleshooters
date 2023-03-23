import { useState } from 'react';
import { ref, set } from 'firebase/database';
import { db, auth } from '../firebase';
import { uid } from 'uid';
import './mutual.css'
import FilterBy from './FilterBy.js';
import ExpenseList from './ExpenseList.js';
import Form from './Form.js';
 
function Mutual({type}) {
    const currentDate = {
		year: new Date().getFullYear(),
		month: new Date().getMonth() + 1
	},
	[date, setDate] = useState(currentDate),
	handleChangeDate = e => {
		const { id, value } = e.target;
		setDate({ ...date, [id]: value });
	};
    return(
        <>
            <h1>omkar</h1>
            <div className='card'>omkar</div>
        
        <section>
        {/* <nav>
				<h2>{type[0].toUpperCase() + type.slice(1)}</h2>
				<FilterBy
					type={type}
					monthActive={date.month}
					yearActive={date.year}
					handleChangeDate={handleChangeDate}
				/>
			</nav> */}
            <FilterBy
					type={type}
					monthActive={date.month}
					yearActive={date.year}
					handleChangeDate={handleChangeDate}
				/>
                	<Form type={type} />
        <ExpenseList
				type={type}
				yearActive={date.year}
				monthActive={date.month}
			/>
        </section>
        </>
    );
}
export default Mutual;