<template>
  <div>
    <h2>Payment test</h2>
    <button @click="post">Send data</button>
  </div>
</template>

<script>
import md5 from 'md5';

export default {
    async mounted() {
        const URL = 'https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/';
        const body = {
            merchantId: 508029,
            ApiKey: '4Vj8eK4rloUd272L48hsrarnUA',
            referenceCode: 'TestPayU',
            accountId: 512326,
            description: 'Test PAYU',
            amount: 3,
            tax: 0,
            taxReturnBase: 0,
            currency: 'USD',
            signature: 'ba9ffa71559580175585e45ce70b6c37',
            test: 1,
            buyerEmail: 'test@test.com',
        };

        const signature = md5(`${body.ApiKey}~${body.merchantId}~${body.referenceCode}~${body.amount}~${body.currency}`);

        // this.post(URL, body);
    },
    methods: {
        post(path, params, method = 'post') {
            // The rest of this code assumes you are not using a library.
            // It can be made less wordy if you use one.
            const form = document.createElement('form');
            form.method = method;
            form.action = path;

            Object.keys(params)
                .forEach((key) => {
                    const hiddenField = document.createElement('input');

                    Object.assign(hiddenField, {
                        type: 'hidden',
                        name: key,
                        value: params[key],
                    });

                    form.appendChild(hiddenField);
                });

            document.body.appendChild(form);
            form.submit();
        },
    },
};
</script>
