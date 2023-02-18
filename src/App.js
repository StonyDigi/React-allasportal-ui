import Allasok from './components/Allasok';
import Form from './components/Form';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Állásportál Feladat</h1>

      <div className='jobForm'>

        <Form/>

      </div>

      <div className='jobs'>
      <Allasok 
              pozicio = "Java fejlesztő"
              datum = "2022.03.27"
              leiras= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, a recusandae dolorem nihil itaque vel qui nesciunt, perspiciatis inventore distinctio, assumenda harum. Doloremque ducimus quibusdam aspernatur maiores? Magnam autem officia quasi, saepe sunt numquam est ullam aliquam hic praesentium voluptas, laboriosam ipsa vero delectus? Aliquam unde veniam enim ratione in."
              gomb = "Jelentkezem"
              
              
      />

      <Allasok 
              pozicio = "IT Rendszergazda"
              datum = "2023.01.07"
              leiras= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, a recusandae dolorem nihil itaque vel qui nesciunt, perspiciatis inventore distinctio, assumenda harum. Doloremque ducimus quibusdam aspernatur maiores? Magnam autem officia quasi, saepe sunt numquam est ullam aliquam hic praesentium voluptas, laboriosam ipsa vero delectus? Aliquam unde veniam enim ratione in."
              gomb = "Jelentkezem"
              
              
      />

      <Allasok 
              pozicio = "Kiberbiztonsági szakértő"
              datum = "2023.02.12"
              leiras= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, a recusandae dolorem nihil itaque vel qui nesciunt, perspiciatis inventore distinctio, assumenda harum. Doloremque ducimus quibusdam aspernatur maiores? Magnam autem officia quasi, saepe sunt numquam est ullam aliquam hic praesentium voluptas, laboriosam ipsa vero delectus? Aliquam unde veniam enim ratione in."
              gomb = "Jelentkezem"
              
              
      />

      <Allasok 
              pozicio = "Webfejlesztő"
              datum = "2022.12.06"
              leiras= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, a recusandae dolorem nihil itaque vel qui nesciunt, perspiciatis inventore distinctio, assumenda harum. Doloremque ducimus quibusdam aspernatur maiores? Magnam autem officia quasi, saepe sunt numquam est ullam aliquam hic praesentium voluptas, laboriosam ipsa vero delectus? Aliquam unde veniam enim ratione in."
              gomb = "Jelentkezem"
              
              
      />

      <Allasok 
              pozicio = "Adatbázis szakértő"
              datum = "2023.01.30"
              leiras= "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, a recusandae dolorem nihil itaque vel qui nesciunt, perspiciatis inventore distinctio, assumenda harum. Doloremque ducimus quibusdam aspernatur maiores? Magnam autem officia quasi, saepe sunt numquam est ullam aliquam hic praesentium voluptas, laboriosam ipsa vero delectus? Aliquam unde veniam enim ratione in."
              gomb = "Jelentkezem"
              
              
      />

</div>

      


    </div>
  );
}

export default App;
