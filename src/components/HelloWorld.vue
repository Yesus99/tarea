<template>
  <div class="card">
    <div class="card-header color">
      <div class="d-flex justify-content-between ">
        <span>Listado de Usuarios</span>
        <div class="btn btn-primary" v-on:click='viewForm = true,defaulData()'>Agregar usuario</div>
      </div> 
    </div>
    <div class="card-body">
      <div v-if='viewForm'>
        <div class="row  ">
          <div class="col-3  ">
            <input type="text" v-model='user.nombre' class='form-control ' placeholder='nombre'>
          </div>
          <div class="col-3">
            <input type="text" v-model='user.apellidos' class='form-control' placeholder='apellidos'>
          </div>
          <div class="col-3">
            <input type="text" v-model='user.telefono' class='form-control' placeholder='telefono'>
          </div>
          <div class="col-3">
            <input type="text" v-model='user.correo' class='form-control' placeholder='correo'>
          </div>
        </div>

        <div class="row mt-1">
          <div class="col-2">
            <div class="color1 btn btn-info" @click='store()' v-if='create'>Crear</div>
            <div class="btn btn-info" @click='update()' v-else>Actualizar</div>
          </div>
          <div class="col-2">
            <div class=" color2 btn btn-danger" @click='viewForm = false'>Cancelar</div>
          </div>
        </div>
      </div>

      <div v-if='users.length == 0'>
        <div class='no-data d-flex justify-content-center align-items-center  '>
        <span>Aun no hay usuarios agregados</span>
        </div>
      </div>

      <div v-else >
        <table class="table mt-2 table-striped   ">
            <thead class="color3">
              <tr>
                <th>Opciones</th>
                <th>Nombre</th>
                <th>Telefono</th>
                <th>Correo</th>
              </tr>
            </thead>
            <tbody >
              <tr class="table-primary " v-for="user in users" :key='user'>
                <td> 
                <fas icon="user-edit" @click='edit(user)'/>
                <fas icon="trash-alt" @click='destroy(user.id)'/>
                </td>
                <td>{{completeName(user)}}</td>
                <td>{{user.telefono}}</td>
                <td>{{user.correo}}</td>
              </tr>
            </tbody>
          </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name:'HelloWorld',
  data () {
    return {
      viewForm: false,
      users: [],
      user: {
        nombre: '',
        apellidos: '',
        telefono: '',
        correo: '',
      },
      create: true,
      userEditId:0
    }
  },
  // Dentro de methods se especifican todos los metodos(funciones)
  methods: {
  defaulData(){
     this.user={nombre: '',apellidos: '',telefono: '',correo: ''}
     this.create=true
     this.userEditId =0
   },

  completeName(el){
  let dataNom = el.nombre.split(' ')
  var element
  var nombres = ""
  for(let i =0; i< dataNom.length;i++) {
  element =`${dataNom[i].charAt(0).toUpperCase()}${dataNom[i].slice(1)}${' '}`
  nombres+=element
  }
  let dataApe = el.apellidos.split(' ')
  var element2
  var apellidos = ""
  for(let i =0; i< dataApe.length;i++){
  element2 =`${dataApe[i].charAt(0).toUpperCase()}${dataApe[i].slice(1)}${' '}`
  apellidos+=element2
  }
  return`${nombres} ${apellidos}`
  },
    store() {
    // guardar en db
      let newUser={
      id: this.users.length+1,
      nombre: this.user.nombre,
      apellidos: this.user.apellidos,
      telefono: this.user.telefono,
      correo:this.user.correo
      } 
      this.users.push(newUser)
      this.defaulData()
    },
    edit(user){
      this.user={
        nombre: user.nombre,
        apellidos: user.apellidos,
        telefono: user.telefono,
        correo: user.correo
        }
        this.create=false
        this.userEditId = user.id
    },
    update(){
    let index = this.users.findIndex( (i) => i.id == this.userEditId)
    this.users[index] = {'id': this.users[index].id,...this.user}
     this.defaulData()
    },
    destroy(id){
     //let index = this.users.findIndex( (i) => i.id == id)
     //if(index != -1) this.users.splice(index,1)
     this.users = this.users.filter( (i) => i.id != id)
    }
  }
}
</script>
