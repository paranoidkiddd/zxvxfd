// Получите все элементы custom select
const customSelects = document.querySelectorAll('.custom-select');

customSelects.forEach(customSelect => {
  const selectSelected = customSelect.querySelector('.select-selected');
  const selectOptions = customSelect.querySelector('.select-options');
  const selectOptionItems = customSelect.querySelectorAll('.select-option');

  // Открывает/закрывает список при клике на .select-selected
  selectSelected.addEventListener('click', function() {
    selectOptions.style.display = selectOptions.style.display === 'block' ? 'none' : 'block';
  });

  // Обработка выбора опции
  selectOptionItems.forEach(option => {
    option.addEventListener('click', function() {
      selectSelected.textContent = option.textContent;
      selectOptions.style.display = 'none';
    });
  });

  // Закрыть список, если клик происходит вне области custom select
  document.addEventListener('click', function(event) {
    if (!customSelect.contains(event.target)) {
      selectOptions.style.display = 'none';
    }
  });
});



VANTA.CLOUDS({
  el: "#after",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  backgroundColor: 0x0,
  skyColor: 0x0,
  cloudColor: 0x282828,
  cloudShadowColor: 0x222222,
  sunColor: 0x181818,
  sunGlareColor: 0x161616,
  sunlightColor: 0x0
})