export const detectExceptions = (orders) => {
  return orders.map(order => {
    const exceptions = [];
    if (order.daysOpen > 7) {
      exceptions.push('days_open_gt_7');
    }
    if (order.status === 'Partially Open' && order.partialDelivery > 50) {
      exceptions.push('partial_delivery_over_threshold');
    }
    return { ...order, exceptions };
  });
};