let currentDailyRate = 0;

// فتح النافذة المنبثقة
function openRentalModal(equipmentName, pricePerDay) {
  currentDailyRate = pricePerDay;
  document.getElementById('equipmentTitle').innerText = 'استئجار ' + equipmentName;
  document.getElementById('dailyRateDisplay').innerText = pricePerDay + 'دينار';
  document.getElementById('rentalModal').style.display = 'flex';
}

// إغلاق النافذة
function closeRentalModal() {
  document.getElementById('rentalModal').style.display = 'none';
}

// حساب عدد الأيام والسعر الإجمالي
function calculateTotal() {
  const startInput = document.getElementById('startDate').value;
  const endInput = document.getElementById('endDate').value;

  if (startInput && endInput) {
    const startDate = new Date(startInput);
    const endDate = new Date(endInput);

    // حساب فرق الأيام
    const diffTime = endDate - startDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays > 0) {
      document.getElementById('daysCount').innerText = diffDays;
      document.getElementById('totalPrice').innerText = (diffDays * currentDailyRate) + 'دينار';
    } else {
      document.getElementById('daysCount').innerText = '0';
      document.getElementById('totalPrice').innerText = 'تاريخ غير صحيح';
    }
  }
}

// عند تأكيد الاستئجار
function confirmRental() {
  const days = document.getElementById('daysCount').innerText;
  const total = document.getElementById('totalPrice').innerText;
  
  if (parseInt(days) > 0) {
    alert(`تم تأكيد الطلب بنجاح!\nعدد الأيام: ${days}\nالإجمالي: ${total}`);
    closeRentalModal();
    // يمكنك هنا إرسال البيانات للباك إند أو واتساب
  } else {
    alert('يرجى تحديد تواريخ استئجار صحيحة.');
  }
}