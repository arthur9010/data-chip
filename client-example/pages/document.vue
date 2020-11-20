<template>
  <div class="main">
  <div class="main">
    <div
      v-if="state === 'initial'"
      class="container"
    >
    <div>
      <h1 class="title_fiap">SECRETARIA FIAP</h1>
      <div class="links">
          <a
            target="_blank"
            class="button--green btn"
            @click="sendMessage()"
          >
            INICIAR IDENTIFICAÇÃO
          </a>
        </div>
    </div>
  </div>
  </div>
    <div
      v-if="state === 'read_chip'"
      class="container"
    >
      <div>
        <h1 class="title_fiap">RECEPÇÃO FIAP</h1>
        <h3 class="title">
          Aproxime o D.C do leitor
        </h3>
    </div>
  </div>
  <div
    v-else-if="state === 'success_read'"
  >
    <b-card
      no-body
      style="max-width: 20rem;"
    >
      <template #header>
        <h4 class="mb-0">{{ user.civilName }}</h4>
      </template>

      <b-card-body v-for="field in fieldsUser">
        <b-card-sub-title class="mb-2">
          {{ field.label }}
        </b-card-sub-title>
        <b-card-text>
          {{ user[field.key] }}
        </b-card-text>
      </b-card-body>

    </b-card>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      state: 'initial',
      user: {},
      fieldsUser: [
        {
          label: 'Nome Civil',
          key: 'civilName',
        },
        {
          label: 'Nome Social',
          key: 'socialName',
        },
        {
          label: 'Profissão',
          key: 'career',
        },
        {
          label: 'Nascimento',
          key: 'birthDate',
        },
        {
          label: 'CPF',
          key: 'cpf',
        },
        {
          label: 'RG',
          key: 'rg',
        },
        {
          label: 'Sexo Biologico',
          key: 'biologicalSex',
        },
        {
          label: 'Tipo Sanguíneo',
          key: 'bloodGroup',
        },
        {
          label: 'Peso',
          key: 'weight',
        },
        {
          label: 'Problemas de Saúde',
          key: 'healthProblems',
        },
        {
          label: 'Alergias',
          key: 'allergies',
        },
      ]
    }
  },
  methods: {
    finish() {
      this.state = 'initial'
    },
    sendMessage: function() {
      this.$socket.sendObj({
        type: 'identification',
      })
      this.state = 'read_chip'
    }
  },
  beforeMount() {
    this.$options.sockets.onmessage = (event) => {
      const response = JSON.parse(event.data)
      if(response.type === 'identification') {
        if(response.code === 200) {
          this.state = 'success_read'
          this.user = response.user
        }
      }
    }
  },
}
</script>

<style>
.main {
  background: black
}
.title_fiap {
  color: #ed145b
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.section_user {
  margin: 5px 10px
}

.container_user {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.result_user {
  color: #C0C0C0
}
.field_user {
  color: #A9A9A9
}
.btn {
  margin-top: 10px;
},
.btn:hover {
  cursor: pointer;
}
</style>
