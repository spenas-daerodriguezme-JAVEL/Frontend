 <template>
  <div>
    <template v-if="!isLogged">
      <div>
        <div class="title__menu">Ingresa a tu cuenta</div>
        <div class="form__row">
          <input-base
            :hasError="formError"
            v-model="userAccount.email"
            label="Email"
          ></input-base>
        </div>

        <div class="form__row">
          <input-base
            :hasError="formError"
            v-model="userAccount.password"
            type="password"
            label="Contraseña"
          ></input-base>
        </div>

        <div class="text--error" style="margin: 5px 0" v-if="formError">
          Usuario o Contraseña incorrectos
        </div>
        <router-link
          tag="div"
          @click.native="closeMenu"
          :to="{ name: 'CreateAccount' }"
          class="new-account text--fs14"
          >¿Eres nuevo?, Crea una cuenta</router-link
        >

        <div class="btn" @click="login">Ingresar</div>
      </div>
    </template>
    <!-- Account login -->
    <template v-else>
        <div class="title__menu">Tu cuenta</div>

        <div class="btn">Salir</div>
    </template>
  </div>
</template>

<script>
import VAPI from '../../http_common';

export default {
    props: {

    },
    data() {
        return {
            isLogged: false,
            formError: false,
            userAccount: {
                email: '',
                password: '',
            },
        };
    },
    computed: {
    },
    mounted() {
        this.isLogged = localStorage.getItem('jwt') === null;
    },
    methods: {
        closeMenu() {
            this.$emit('close');
        },
        async login() {
            try {
                console.log('Request');
                const res = await VAPI.post('/auth', this.userAccount);
                console.log(res);
                localStorage.clear();
                localStorage.jwt = res.data.token;

                if (res.status === 200) {
                    this.$refs.modal.triggerModal();
                    this.formError = false;
                    this.isActive = false;
                } else if (res.status === 401) {
                    this.formError = true;
                }
            } catch (error) {
                this.formError = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>

.new-account {
  text-decoration: underline;
  transition: 0.2s;
  cursor: pointer;
  transform: skewX(0deg);
  text-align: right;

  a {
    color: inherit;
  }

  &:hover {
    transform: skewX(-10deg);
  }
}

.form__row {
  margin: 7px 0;
}

</style>
