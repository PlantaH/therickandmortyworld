//https://github.com/public-apis/public-apis apis de todo


const URLGET = "https://rickandmortyapi.com/api/character"


$("#verPersonajes").click(() => { 
  TraerPersonajes(URLGET)  
});


function TraerPersonajes(url){
  
    let estado = "", genero="", especie="";

    $.get(url, function (respuesta, estado) {
       $("#personajes").html('');

          if(estado === "success"){
            let misPaginas = respuesta.info.next;
            //console.log(misPaginas)

            let misDatos = respuesta.results;
            //console.log(misDatos)
            for (const dato of misDatos) {
                estado = dato.status;
                if (dato.status === "Dead") estado = "Muerto"
                if (dato.status === "Alive") estado = "Vivo"
                if (dato.status === "unknown") estado = "Desconocido"

                genero = dato.gender;
                if (dato.gender === "Female") genero = "Femenino"
                if (dato.gender === "Male") genero = "Masculino"
                
                especie = dato.species;
                if (dato.species === "Human") especie = "Humano"
                if (dato.species === "Alien") especie = "Alienígica"
              
                $("#personajes").append(`
                  <div class="col-lg-3 col-sm-12  ficha">                    
                    <div class="row g-0">
                    <div class="col-md-12 text-center">
                    <h5 class="card-title ficha__titulo" title="${dato.name}">${dato.name}</h5>
                    </div>
                    <div class="col-md-4">
                        <img src="${dato.image}" class="img-fluid rounded ficha__foto"  alt="${dato.name}">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          
                          <p class="card-text">Estado: <small class="text-muted ficha__dato">${estado}</small></p>
                          <p class="card-text">Genero: <small class="text-muted ficha__dato">${genero}</small></p>
                          <p class="card-text">Especie: <small class="text-muted ficha__dato">${especie}</small></p>
                          <p class="card-text">Tipo: <small class="text-muted ficha__dato">${dato.type}</small></p>
                        </div>                        
                      </div>
                    </div>                    
                  </div>                  
                `);
            } 
            $("#personajes").append(`
            <div class="d-flex justify-content-center" style="margin-bottom:150px;margin-top:20px;">
              <p class="icon-3d " onclick="TraerPersonajes('${misPaginas}')">Ver mas</p>              
            </div>                  
             `);  
          }
          document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    });
   
}
 