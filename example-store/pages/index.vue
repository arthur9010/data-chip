<template>
  <div>
    <div
      v-if="state == 'initial'"
      class="container"
    >
      <div>
        <h1 class="title">
          {{ establishmentName.toUpperCase() }}
        </h1>
        <b-input-group size="lg" prepend="$" >
          <b-form-input
            v-model="price"
            type="number"
            placeholder="Total da compra"
          />
        </b-input-group>
        <div class="links">
          <a
            target="_blank"
            class="button--green btn"
            @click="sendMessage()"
          >
            PRONTO
          </a>
        </div>
      </div>
    </div>
    <div
      v-else-if="state === 'read_chip'"
      class="container"
    >
      <h3 class="title">
        Aproxime o D.C do leitor
      </h3>
  </div>
  <div
    v-else-if="state === 'success_debit'"
    class="container"
  >
    <div>
      <h5 class="title">
        {{ resultDebit }}
      </h5>
      <div class="links">
        <a
          target="_blank"
          class="button--green btn"
          @click="finishDebit()"
        >
          NOVA VENDA
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      price: null,
      state: 'initial',
      establishmentName: 'Faguinho Boutique',
      resultDebit: ''
    }
  },
  methods: {
    finishDebit() {
      this.state = 'initial'
      this.price = null
    },
    sendMessage: function() {
      this.$socket.sendObj({
        type: 'debit',
        value: this.price,
        establishmentName: this.establishmentName
      })
      this.state = 'read_chip'
    }
  },
  beforeMount() {
    this.$options.sockets.onmessage = (msg) => {
      const response = JSON.parse(event.data)
      if(response.type === 'debit') {
        console.log('ue')
        if(response.code === 200) {
          this.state = 'success_debit'
          this.resultDebit = response.message
        }
      }
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
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
.btn {
  margin-top: 10px;
},
.btn:hover {
  cursor: pointer;
}
</style>
