export let priopitySelector = ` 
<select class="form-select priority-selector" aria-label="Default select example">
<option value="high">Неотложная</option>
<option value="normal">Приоритетная</option>
<option value="low">Обычная</option>
</select>`;

export let visitStatus = `<select class="form-select form-select-visit-status" aria-label="Default select example">
<option value="open">Назначен</option>
<option value="closed">Завершен</option>
</select>`;

export let cardiologistSelect = `cardiologist`;
export let dentistSelect = `dentist`;
export let therapistSelect = `therapist`;

export let doctorSelect = `<select class="form-select doctor-select" id="doctorSelect" aria-label="Default select example">
<option value="${cardiologistSelect}">Кардиолог</option>
<option value="${dentistSelect}">Стоматолог</option>
<option value="${therapistSelect}">Терапевт</option>
</select>
`;

export let commonDoctorsInput = `<input type="text" class="form-control margin-bottom input-name-surname" required placeholder="ФИО" aria-label="Example text with button addon">
<input type="text" class="form-control margin-bottom input-visit-purpose" placeholder="Цель визита" required aria-label="Example text with button addon">
<input type="text" class="form-control margin-bottom input-visit-description" placeholder="Короткое описание визита" required aria-label="Example text with button addon">
<div class="create-visit-expanded-accomodation-place"></div>`;

export let createVisitFormSelectorsAndBtns = `<p>Срочность визита:</p>
${priopitySelector}
<div class="margin-bottom"></div>
<p>Выберете доктора:</p>
${doctorSelect}
<div class="margin-bottom"></div>
<button  type="submit" class="btn-submit-visit btn btn-primary btn-lg" style="margin-right:30px">Создать</button> <button class="btn-close-creating-visit-form btn btn-primary btn-lg">Закрыть</button>
`;

export let ageInput = `<input type="text" class="form-control margin-bottom input-age" required placeholder="Возраст" aria-label="Example text with button addon">`;

export let cardiologistVisit = `<input type="text" class="form-control margin-bottom input-blood-pressure" required placeholder="Обычное давление" aria-label="Example text with button addon">
<input type="text" class="form-control margin-bottom input-BMI" placeholder="Индекс массы тела" required aria-label="Example text with button addon">
<input type="text" class="form-control margin-bottom input-heart-diseases" required placeholder="Перенесенные заболевания сердечно-сосудистой системы" aria-label="Example text with button addon">
${ageInput}`;

export let dentistVisit = `<input type="text" class="form-control margin-bottom input-last-visit" required placeholder="Дата последнего визита" aria-label="Example text with button addon">
`;
export let therapistVisit = `${ageInput}`;

// export let hideContentCardBtn =  <button class='hide-crad-content btn btn-primary'>Скрыть информацию</button>

// export let cardBtns = `<div class='cards-btn-wrap'> <button class='show-crad-content btn btn btn-primary'>Показать больше</button>
// <button class='change-crad-content btn btn btn-primary'>Редактировать</button> </div>`;
