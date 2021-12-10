function myFunction () {
    document.getElementById ("text").innerHTML = "Cambie";
    document.getElementById ("text2").innerHTML = "Cambie x2";
}

function newFunction () {
    document.getElementById ("text").innerHTML = "texto1";
    document.getElementById ("text2").innerHTML = "texto2";
}

/* */
//console.log()

//const h1 = document.getElementById("titulo")

//h1.textContent = "Nuevo titulo web";
//h1.style.backgroundColor = "black";
//h1.style.color = "white"


//const boton = document.querySelector('.btn-primary');

//boton.addEventListener("click", () => {
//    console.log('me distes click');
//    h1.textContent = "Diabolus";
//    h1.style.color = "red";
//});

//console.log(boton);


//function imprimirMensaje(num1) {

//if(num1 === 1){
//    console.log('opcion 1');
//}if(num1 === 2){
//    console.log('opcion 2');
//}
//else {
//    console.log('no hay opcion disponible');
//}
//};         
//imprimirMensaje(); 
 



 //let num = 1;
 
// switch(num){
//     case 1:
//        function suma(num1, num2){
//            let resultado = (num1 + num2);
  //          return 'El resultado es: ' + resultado + '';
//        }
//        console.log(suma(10, 40));
//     break;
  //   case 2:
 //    console.log('No muy contento');
//     break;
//     case 3:
//     console.log('Contento');
//     break;
//     case 4:
//     console.log('Muy contento');
//     break;
//     default:
//     console.log('Muy descontento');
// }
  


//const Titulo = document.querySelector('#titulo');

//const h1 = document.createElement('h1')
//h1.textContent = "titulo nuevo desde js"
//console.log(h1)

//Titulo.appendChild(h1);



/*const Titulo = document.querySelector('#titulo');


const arrayPaises = ["peru", "bolivia", "costa rica"];

const fragment = document.createDocumentFragment();

arrayPaises.forEach((pais) => {
  const h1 = document.createElement('h1');
  h1.textContent = pais;
  fragment.appendChild(h1);
  console.log(pais);
});

titulo.appendChild(fragment);*/



/*const Titulo = document.querySelector('#titulo');*/


/*const arrayPaises = ["peru", "bolivia", "costa rica"];

const fragment = document.createDocumentFragment();

arrayPaises.forEach((pais) => {
  const newNode = document.createElement('h1');
  newNode.textContent = pais;

const referenceNode = fragment.firstChild;

  fragment.insertBefore(newNode, referenceNode);
  console.log(pais);  
});


titulo.appendChild(fragment);*/






/*arrayPaises.forEach((pais) => {
  titulo.innerHTML += `<h1>${pais}</h1>`;
  console.log(pais);
});*/





/*const arrayPaises = ["peru", "bolivia", "costa rica"];
for (let pais = arrayPaises.length; pais >= arrayPaises.length; pais--) {
  const h1 = document.createElement('h1');
  h1.textContent = arrayPaises;
  console.log(` ${arrayPaises}`);
  Titulo.appendChild(h1);
}*/



/*const arrayPaises = ["peru", "bolivia", "costa rica"];

let template = "";

arrayPaises.forEach((pais) => {
template += `
<h1 id="titulo" class="mb-2 text-center text-danger">${pais}</h1>`
})

titulo.innerHTML = template;*/

//const Titulo = document.querySelector('#titulo');

//const hTemplate = document.querySelector("#hTemplate");

//const clone = hTemplate.content.cloneNode(true);

/*console.log(clone.querySelector('.text-danger'))*/

//clone.querySelector(".text-danger").textContent = "New title";

//Titulo.appendChild(clone)










/*const boton = document.querySelector('.btn-primary');

boton.addEventListener("click", () => {
   Titulo.style.display = "none"
});*/



//const boton2 = document.querySelector('#botone');

//boton2.addEventListener("click", () => {
//  h1.style.color = "blue"
//   h1.style.display = "block";
//});




/*const lista = document.querySelector('#lista');
const fragment = document.createDocumentFragment();
const liTemplate = document.querySelector("#liTemplate")


const arrayPaises = ["peru", "mexico", "costa rica"];

arrayPaises.forEach(pais => {
  const clone = liTemplate.content.cloneNode(true) 
  clone.querySelector('span').textContent = pais

  fragment.appendChild(clone)
})


lista.appendChild(fragment);*/





/*const titulo = document.querySelector('#titulo');
const fragment = document.createDocumentFragment();
const hTemplate = document.querySelector("#hTemplate")

const arrayPaises = ["peru", "mexico", "costa rica"];

arrayPaises.forEach(pais => {
  const clone = hTemplate.content.cloneNode(true) 
  clone.querySelector('p').textContent = pais

  fragment.appendChild(clone)
})


titulo.appendChild(fragment);*/









//callbacks platzi//

/*function sum(num1, num2) {
  return num1 + num2;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}


console.log(calc(6, 2, sum));*/




//calback 2//

/*function date(callback) {
  console.log(new Date);
  setTimeout(function () {
    let date = new Date;
    callback(date);
  }, 3000)
}

function printDate(dateNow) {
  console.log(dateNow);
}

date(printDate);*/






//emprinos//


//Ejemplo sincrono//

/*Estas tareas van por secuencia y cuando se esta ejecutando una tarea larga
las demas tareas no se van a ejecutar por la misma tarea larga y se ejecutaran
una vez que esta halla terminado y seguiran su respectivo orden secuencial.*/


/*let numeroFinal = 0;
for(let i =0; i<500000000; i++){
  numeroFinal +=5;
}

console.log(numeroFinal);
document.body.style.background = 'red';
console.log('last homework');*/



//Ejemplo asincrono//

/*Las tareas se pueden ejecutar en paralelo sin importa la secuencia de las tareas
 y sin importar que una siga ejecutandose las demas se ejecutaran y buscaran concluirse
ignorando lo antes mencionado y existen tres tipos de formas de implementar el javascript asincrono
los cuales son: Callbacks, promises y sinc and await.*/


//callbacks emprinos//
/*Los callbacks son funciones que se pasan como parametro adentro de otras funciones
y existen dos tipos de callbacks los sincronos y ansicronos*/



//callbacks sincronos//

/*const generaNumero = () => {
    return Math.floor(Math.random() * 10);
};

const imprimeNumero = (callback) => {
  let numero = callback();
  console.log(numero);
};


imprimeNumero(generaNumero);*/




//callbacks asincronos//

/*const bajaVideo = (url, callback) => {
  console.log(`bajando video de ...${url}`);
setTimeout(() => {
  console.log(`video de ${url} descargado`);
  callback(url);
}, 2000);
};

const procesaVideo = (url) => {
  console.log(`procesando video de ${url}`);
};


let url = 'https://www.youtube.com/watch?v=-6GHtpjhG7U';
bajaVideo(url, procesaVideo);*/




//callbacks blueweeb//


/*const posts = [
  {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];


const findPostById = (id, callback) => {

    const post = posts.find(item => item.id === id);

    if (post) {
      callback(null, post);
    } else {
      callback("No se encontro el post con id " + id);
    }
};

findPostById(3, (err, post) => {
  if (err) return console.log(err);
    console.log(post);
});*/









//promesas platzi//

/*const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('hey baby');
    } else {
      reject('No sirvio');
    }
  });
};


somethingWillHappen()
.then(response => console.log(response))
.catch(err => console.error(err));



const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      setTimeout(() => {
        resolve('hey baby x2');
      
      }, 2000)
      } else {
        const error = new Error('No sirvio x2');
      reject(error);
    }
  });
};


somethingWillHappen2()
.then(response => console.log(response))
.catch(err => console.error(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(response => {
  console.log('Array of results', response);
})
.catch(err => {
  console.error(err);
});*/







//promesas emprinos//


//construccion de una promesa//

/*let teHasPortadoBien = false;

const siMePortoBien = new Promise((resolve, reject) => {
if (teHasPortadoBien) {
  const telefono = {
    modelo: 'samsung s21',
    capacidad: '128GB',
    color: 'rojo',
  };
  resolve(telefono);
} else {
  reject('Te has portado mal');
}
});


//Uso (Consumo de la promesa)//


const promesaCumplida = (resolvedValue) =>{
  console.log(`Te regalo tu nuevo ${resolvedValue.modelo}`);
}
const promesaRota = (rejectedValue) =>{
  console.log(`No te compro nada porque ${rejectedValue}`);
}


//siMePortoBien.then(promesaCumplida, promesaRota);//

const pideRegalo = () =>{
  siMePortoBien
  .then(promesaCumplida)
  .catch(promesaRota)
};


pideRegalo();*/






/*const chequeaComportamiento = (comportamiento) =>{
  return new Promise((resolve, reject)=>{
    if (comportamiento) {
      const telefono = {
        modelo: 'samsung s21',
        capacidad: '128GB',
        color: 'rojo',
      };
      resolve(telefono);
    } else {
      reject('Te has portado mal');
    }   
  });
};


const grabaVideo = (telefono) =>{
  const mensaje = `Grabo video para tic tock con mi ${telefono.modelo} nuevo`;
  return Promise.resolve(mensaje);
}


let comportamiento = true;
chequeaComportamiento(comportamiento)
.then((resolvedValue)=>{
return grabaVideo(resolvedValue);
})
.then((resolvedValue)=>{
  console.log(resolvedValue);
})
.catch((errorMensaje)=>{
console.log(errorMensaje);
});*/














/*const chequeaComportamiento = (comportamiento) =>{
  return new Promise((resolve, reject)=>{
    if (comportamiento) {
      const telefono = {
        modelo: 'samsung s21',
        capacidad: '128GB',
        color: 'rojo',
      };
      resolve(telefono);
    } else {
      reject('Te has portado mal');
    }   
  })
};


const chequeaCalificacion = (calificacion)=>{
  return new Promise((resolve, reject)=>{
    if(calificacion > 85) {
      resolve('Good job')
    } else {
      reject('Tienes que estudiar mas y mejor')
    }
  });
};


const mePorteBien = chequeaComportamiento(true);
const estudieBien = chequeaCalificacion(94);
const promesas = [mePorteBien, estudieBien];


Promise.all(promesas)
.then((values) =>{
  console.log(values);
})
.catch((error) =>{
  console.log(error);
});*/



                  

//promises blueweb//

/*const posts = [
  {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];


const findPostById = (id) => { 

  const post = posts.find(item => item.id === id) 
   
  return new Promise((resolve, reject) => { 
  
  if(post){ 
  
  resolve(post); 
  
  }else { 
  
  reject("No se encontro el id " + id); 
  } 
  }) 
  } 
   
  
  findPostById(1)
  .then(post => console.log(post)) 
  .catch(e => console.log(e));*/ 








//async and await platzi//


/*const doSomethingAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
    ? setTimeout(() => resolve('Do Something Async x'), 3000)
    : reject(new Error('Test error'))
  });
}


const doSomething = async () => {
  const something = await doSomethingAsync();
  console.log(something);
}


console.log('before');
doSomething();
console.log('after');


const anotherFunction = async () => {
  try {
    const something = await doSomethingAsync();
    console.log(something);
  } catch (error) {
    console.error(error);
  }
}


console.log('before 2');
anotherFunction();
console.log('after 2');*/









//async and await//


//async and await es azucar sintactico para trabajar mas facil con promesas//



/*const chequeaComportamiento = (comportamiento) =>{
  return new Promise((resolve, reject)=>{
    if (comportamiento) {
      const telefono = {
        modelo: 'samsung s21',
        capacidad: '128GB',
        color: 'rojo',
      };
      resolve(telefono);
    } else {
      reject('Te has portado mal');
    }   
  })
};


const chequeaCalificacion = (calificacion)=>{
  return new Promise((resolve, reject)=>{
    if(calificacion > 85) {
      resolve('Good job')
    } else {
      reject('Tienes que estudiar mas y mejor')
    }
  });
};



async function pideTelefonoNuevo(comportamiento, calificacion) {
  try{
    const promesas = await Promise.all([chequeaComportamiento(comportamiento),
    chequeaCalificacion(calificacion)]);
    console.log(promesas);
  } catch(error){
    console.log(error);
  }
}



pideTelefonoNuevo(true, 100);*/




/*const posts = [
  {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];




const findPostById = (id) => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(item => item.id === id);
      if (post) { 
  
        resolve(post); 
        
      } else { 
        
        reject("No se encontro el id " + id);       
    }
  }, 2000);
  });


const buscar = async (id) => {

try {
  const post = await findPostById(id)
  console.log(post);
} catch (error) {
  console.log(error);
} finally {
   console.log('se ejecuta si o si')
}

};

buscar(4)*/


//usar Promise all para usas mas promesas//


/*const posts = [
  {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
];





const findPostById = (id) => 
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(item => item.id === id);
      if (post) { 
  
        resolve(post); 
        
      } else { 
        
        reject("No se encontro el id " + id);       
    }
  }, 2000);
  });


const buscar = async () => {
  try {
    const resPosts = await Promise.all([findPostById(1), findPostById(2)]);

    console.log(resPosts);
    
  } catch (error) {
    console.log(error);
  } finally {
    console.log("se ejecuta si o si");
  }
};

buscar()*/



/*let x = function (a, b) {
  return a + b;
};




if (x(1, 6) <= 10){
  console.log('menos de 10');
} else {
  console.log('mas 10');
};*/


/*function myDisplayer(sum) {
  document.getElementById("demo").innerHTML = sum;
}

function myCalculator(num1, num2, myDisplayer) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5, myDisplayer);*/




/*setTimeout(myFunction, 3000);

function myFunction() {
  document.getElementById("demo").innerHTML = "setTimeout on!";
}*/



function myDisplayer(x) {
  document.getElementById("demo").innerHTML = x;
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer(value);},
  function(error) {myDisplayer(error);}
);




