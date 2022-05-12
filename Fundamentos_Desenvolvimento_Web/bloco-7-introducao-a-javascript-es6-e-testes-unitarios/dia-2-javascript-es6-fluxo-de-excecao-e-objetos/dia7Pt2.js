const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    const deliveryPerson = order.order.delivery.deliveryPerson;
    const clientName = order.name;
    const foneNumber = order.phoneNumber;
    const street = order.address.street;
    const number = order.address.number;
    const apartment = order.address.apartment;
    return `
    Olá, ${deliveryPerson}!
    Entrega para: ${clientName}
    Telefone ${foneNumber}
    Rua ${street}, Nº ${number}, AP ${apartment}`
  }
  
  console.log(customerInfo(order));
  
  const orderModifier = (order) => {
    order.name = 'Ady Luna';
    order.payment.total = 50;
    const name = order.name;
    const totalPayment = order.payment.total;
    const pizzas = Object.keys(order.order.pizza);
    const drink = order.order.drinks.coke.type;
    return `
    Olá, ${name}!
    O total do seu pedido de ${pizzas.join(', ')} e ${drink} é de R$ ${totalPayment},00.` 
  }
  
  console.log(orderModifier(order));