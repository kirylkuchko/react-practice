import './employees-list-item.css';

const EmployeesListItem = (props) =>  {
    const { name, salary, isPropmoted, isRised, onRemoveEmployee, onPromotionToogle, onRiseToogle } = props;

    const getlistItemClassName = (isPropmoted, isRised) => {
        let listItemClassName = 'employees-list-item list-group-item d-flex justify-content-between';
        if (isPropmoted) {
            listItemClassName += ' promotion';
        }

        if (isRised) {
            listItemClassName += ' like';
        }

        return listItemClassName;
    }

    return (
        <li className={getlistItemClassName(isPropmoted, isRised)}>
            <span onClick={onRiseToogle} className="list-group-item-label">{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={`${salary} $`}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button onClick={onPromotionToogle} type="button" className="btn-cookie btn-sm ">
                    <i className="fas fa-cookie"></i>
                </button>

                <button onClick={onRemoveEmployee} type="button"className="btn-trash btn-sm ">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    );  
}

export default EmployeesListItem;