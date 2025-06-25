import './App.css'



const InputList = () => {
  return (
    <div className="inputstyle">
      <form>
        <label for="name"></label>
          <input className='inp'  type="text" placeholder='Adicionar tarefa...' id="name"/>
        <button className="btnsub" type="submit">+</button>
      </form>
    </div>
  );
};

const ItemList = () => {
  return (
    <div></div>
  )
}

const DeleteButton = () => {
  <div><button>-</button></div>
};

export default function App() {
  return (
    <div>
      <InputList />
    </div>
  );
}
