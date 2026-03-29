export const fetchOrderData = async (orderId: string) => {
  try {
    const response = await fetch(`/api/sap/orders/${orderId}`);
    if (!response.ok) throw new Error('Failed to fetch order data');
    return await response.json();
  } catch (error) {
    console.error('Error fetching order data:', error);
    throw error;
  }
};

export const placeHoldOnOrder = async (orderId: string) => {
  try {
    const response = await fetch(`/api/sap/orders/${orderId}/hold`, { method: 'POST' });
    if (!response.ok) throw new Error('Failed to place hold on order');
    return await response.json();
  } catch (error) {
    console.error('Error placing hold on order:', error);
    throw error;
  }
};