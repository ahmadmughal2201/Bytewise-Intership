import { useState } from "react";
import styled from "styled-components"

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
width:100%;
`;

const Balancebox = styled.div`
font-size:15px;
width:100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;

`;

const AddButton = styled.button`
background:black;
color:white;
padding: 5px 10px;
border-radius: 4px;
cursor: pointer;
font-size:15px;
font-weight:bold;
`;

const AddTranxContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
border: 1px solid #e6e8e9;
gap: 10px;
padding: 5px 10px;
margin: 20px;

& input{
    outline: none;
    padding:10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
}
`;

const RadioBox = styled.div`
width:100%;
display: flex;
flex-direction: row;
align-items: center;

& input{
    width:unset;
    margin: 0 10px;
}
`;

const ExpenseContainer = styled.div`
display: flex;
flex-direction: row;
gap: 12px;
margin: 20px;
`;
const ExpenseBox = styled.div`
border-radius: 4px;
border: 1px solid #e6e8e9;
padding: 15px 20px;
font-size: 14px;
display: flex;
flex-direction: column;
gap: 10px;
width: 135px;
& span {
    color: ${(props) => (props.isIncome ? "green" : "red")};
    font-weight: bold;
    font-size: 20px;
}
`;

const AddView = (props) => {

    const [amount, setAmount] = useState();
    const [desc, setDesc] = useState();
    const [type, setType] = useState("EXPENSE");

    const addTransaction = () => {
        props.addTransaction({ amount: Number(amount), desc, type, id: Date.now() });
        props.toggleAddTxn();
    };

    return (
        <AddTranxContainer>
            <input placeholder="Amount" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />


            <input placeholder="Description" value={desc} onChange={(e) => setDesc(e.target.value)} />

            <RadioBox>
                <input type="radio" id="expense" name="type" value="EXPENSE" checked={type === "EXPENSE"} onChange={(e) => setType(e.target.value)} />
                <label htmlFor="expense">Expense</label>

                <input type="radio" id="income" name="type" value="INCOME" checked={type === "INCOME"} onChange={(e) => setType(e.target.value)} />
                <label htmlFor="income">Income</label>
            </RadioBox>
            <AddButton onClick={addTransaction} >Add Transaction</AddButton>
        </AddTranxContainer>
    )
};

const Overview = (props) => {

    const [isAddTxnVisible, toggleAddTxn] = useState(false);
    return (
        <Container>
            <Balancebox>
                Balance: ${props.income - props.expense}
                <AddButton onClick={() => toggleAddTxn(!isAddTxnVisible)}>{isAddTxnVisible ? "Cancel" : "ADD"}</AddButton>
            </Balancebox>

            {isAddTxnVisible && <AddView toggleAddTxn={toggleAddTxn} addTransaction={props.addTransaction} />}

            <ExpenseContainer>
                <ExpenseBox>
                    Expense<span>${props.expense}</span>
                </ExpenseBox>
                <ExpenseBox isIncome={true}>
                    Income<span>${props.income}</span>
                </ExpenseBox>
            </ExpenseContainer>

        </Container>

    )
}

export default Overview