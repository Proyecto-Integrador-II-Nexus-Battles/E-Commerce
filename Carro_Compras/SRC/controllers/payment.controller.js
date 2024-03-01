import {
  HOST,
  PAYPAL_API,
  PAYPAL_API_CLIENT,
  PAYPAL_API_SECRET,
} from "../config.js";
import axios from "axios";

export const createOrder = async (req, res) => {
  //crear el archivo de la orden
  const order = {
    intent: "CAPTURE",
    //productos
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00",
        },
      },
    ],
    //contexto de la aplicacion
    application_context: {
      brand_name: "THE NEXUS BATTLE II",
      landing_page: "NO_PREFERENCE",
      user_action: "PAY_NOW",
      return_url: `${HOST}/capture-order`,
      cancel_url: `${HOST}/cancel-order`,
    },
  };

  const params = new URLSearchParams(); //parametro
  params.append("grant_type", "client_credentials");

  //autenticar antes de mandar la orden y mandar un parametro
  const {
    data: { access_token },
  } = await axios.post(`${PAYPAL_API}/v1/oauth2/token`, params, {
    auth: {
      username: PAYPAL_API_CLIENT,
      password: PAYPAL_API_SECRET,
    },
  });

  //enviar la orden y recibir permiso
  const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  console.log(response.data);
  return res.json(response.data);
};

export const captureOrder = async (req, res) => {
  const { token } = req.query; //guardo el valor de token que sirve para enviarle a paypal que el usuario acepto

  const response = await axios.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {},
    {
      auth: {
        username: PAYPAL_API_CLIENT,
        password: PAYPAL_API_SECRET,
      },
    }
  );

  console.log(response.data);

  return res.send("pagado");
};
export const cancelPayment = (req, res) => res.redirect("/");
