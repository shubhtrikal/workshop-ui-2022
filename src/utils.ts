import axios from 'axios';
import { Details } from './pages/_app';
export const loadScript = (src: string) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};
export const checkPromo = async (promo: string) => {
  try {
    console.log(process.env.NEXT_PUBLIC_BACKEND);

    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND}/checkPromo`,
      promo
    );
    if (res.data)
      document.getElementById('message').innerHTML = 'Promo Code Applied';
    else
      document.getElementById('message').innerHTML =
        'Error, No Such Promo Code Found';
    return res.data;
  } catch (e) {
    document.getElementById('message').innerHTML =
      'Error, No Such Promo Code Found';
    return false;
  }
};
export const saveUser = async (
  values: Details,
  amount: string,
  paymentId: string,
  workshopAcount: Number,
  workshopBcount: Number,
  promo: string
) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND}/save`, {
      user: {
        name: values.name,
        phone: values.phone,
        email: values.email,
        college: values.college,
        workshopA: values.workshopA,
        workshopB: values.workshopB,
        earlyBirdWorkshopA: values.workshopA && workshopAcount < 50,
        earlyBirdWorkshopB: values.workshopB && workshopBcount < 50,
        amount: amount,
        paymentId,
      },
      code: { promo },
    });

    if (res.data) return res.data;
    else return new Error(res.data.error);
  } catch (e) {
    return e;
  }
  //   })
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .catch((error) => {
  //       return error;
  //     });
};
export const seatCount = async () => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND}/count`
    );
    if (response) return response.data;
    else throw new Error('Something Went Wrong');
  } catch (e) {
    console.log(e);
  }
};