import './App.css'
import styled from "styled-components";
import Chart from "./components/Chart";

const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(70px);
  border-radius: 24px;
  //width: 1200px;
  //height: 700px;
`

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  /* gray/900 */
  color: #111928;
`

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  width: 100%;
`

const dataNumberOfResponses = [
  {name: 'Релевантные отклики', value: 120},
  {name: 'Нерелевантные отклики', value: 230},
];

const dataAgeOfCandidates = [
  {name: '19 лет', value: 136},
  {name: '20 лет', value: 120},
  {name: '21 год', value: 78},
  {name: '22 года', value: 23},
  {name: 'Другое', value: 56},
];

const dataAcquisitionChannels = [
  {name: 'Соцсети', value: 136},
  {name: 'Реклама на сайте', value: 89},
  {name: 'По почте', value: 78},
  {name: 'HH.ru', value: 120},
  {name: 'Другое', value: 56},
];

const dataExperience = [
  {name: 'менее 1 года', value: 235},
  {name: '1 год', value: 120},
  {name: '2 года', value: 78},
  {name: '3 года', value: 70},
  {name: 'Другое', value: 56},
];

const dataEducation = [
  {name: 'Неоконченное высшее', value: 235},
  {name: 'Оконченное высшее', value: 23},
  {name: 'Среднее общее', value: 12},
  {name: 'Среднее профессиональное', value: 23},
  {name: 'Другое', value: 27},
];

const dataUniversity = [
  {name: 'МГУ им. М.В. Ломоносова', value: 24},
  {name: 'МГТУ им. Н.Э. Баумана', value: 78},
  {name: 'НГУ', value: 20},
  {name: 'МФТИ', value: 71},
  {name: 'Другое', value: 27},
];

const dataCity = [
  {name: 'Москва', value: 400},
  {name: 'Санкт-Петербург', value: 23},
  {name: 'Нижний Новгород', value: 12},
  {name: 'Екатеринбург', value: 23},
  {name: 'Другое', value: 27},
];

const dataApplicationsForInterns = [
  {name: '1', value: 12},
  {name: '2', value: 23},
  {name: '3', value: 0},
  {name: '4', value: 0},
  {name: '5', value: 13},
  {name: '6', value: 12},
  {name: '7', value: 7},
  {name: '8', value: 12},
  {name: '9', value: 21},
  {name: '10', value: 27},
  {name: '11', value: 0},
  {name: '12', value: 0},
  {name: '13', value: 23},
  {name: '14', value: 12},
  {name: '15', value: 23},
  // {name: '16', value: 27},
  // {name: '17', value: 12},
  // {name: '18', value: 12},
  // {name: '19', value: 11},
  // {name: '20', value: 12},
  // {name: '21', value: 23},
  // {name: '22', value: 9},
  // {name: '23', value: 0},
  // {name: '24', value: 2},
  // {name: '25', value: 0},
  // {name: '26', value: 0},
  // {name: '27', value: 0},
  // {name: '28', value: 12},
  // {name: '29', value: 0},
  // {name: '30', value: 0},
];

const colors = ['#6875F5', '#E74694', '#9061F9', '#31C48D', '#FACA15'];

function App() {
  const sumOfResponses = dataNumberOfResponses.reduce((acc, cur) => acc + cur.value, 0)
  const sumOfApplications = dataApplicationsForInterns.reduce((acc, cur) => acc + cur.value, 0)

  const maxValue = (data) => data.reduce((max, cur) => {
    return cur.value > max ? cur.value : max;
  }, 0);

  const popularAge = dataAgeOfCandidates.find((el) => el.value === maxValue(dataAgeOfCandidates)).name;
  const popularChannel = dataAcquisitionChannels.find((el) => el.value === maxValue(dataAcquisitionChannels)).name;
  const popularExperience = dataExperience.find((el) => el.value === maxValue(dataExperience)).name;
  const popularEducation = dataEducation.find((el) => el.value === maxValue(dataEducation)).name;
  const popularUniversity = dataUniversity.find((el) => el.value === maxValue(dataUniversity)).name;
  const popularCity = dataCity.find((el) => el.value === maxValue(dataCity)).name;

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 32}}>
      <Block>
        <Title>Статистика (заявки кандидатов)</Title>
        <ChartsGrid>
          <Chart data={dataNumberOfResponses} colors={colors} textArray={['отклик', 'отклика', 'откликов']}
                 description={'всего откликов от потенциальных кандидатов'} header={'Количество откликов'}
                 mainInfo={sumOfResponses} size={'small'} gridColumn={'span 3 / span 3'}/>
          <Chart data={dataAgeOfCandidates} colors={colors}
                 description={'самый частый возраст среди всех кандидатов'} header={'Возраст кандидатов'}
                 mainInfo={popularAge} size={'small'} gridColumn={'span 3 / span 3'}/>
          <Chart data={dataAcquisitionChannels} colors={colors}
                 description={'самый частый канал привлечения среди всех кандидатов'}
                 header={'Каналы привлечения'} mainInfo={popularChannel} size={'small'}
                 gridColumn={'span 3 / span 3'}/>
          <Chart data={dataExperience} colors={colors}
                 description={'самая частая продолжительность опыта работы среди кандидатов'}
                 header={'Опыт работы'} mainInfo={popularExperience} size={'small'} gridColumn={'span 3 / span 3'}/>
          <Chart data={dataEducation} colors={colors}
                 description={'самый часто встречающийся уровень образования среди кандидатов'} header={'Образование'}
                 mainInfo={popularEducation} size={'large'} gridColumn={'span 4 / span 4'}/>
          <Chart data={dataUniversity} colors={colors}
                 description={'самый часто встречающийся вуз среди кандидатов'} header={'Вузы'}
                 mainInfo={popularUniversity} size={'large'} gridColumn={'span 4 / span 4'}/>
          <Chart data={dataCity} colors={colors}
                 description={'самый часто встречающийся регион среди кандидатов'} header={'Города'}
                 mainInfo={popularCity} size={'large'} gridColumn={'span 4 / span 4'}/>
        </ChartsGrid>
      </Block>
      <Block>
        <Title>Статистика (заявки на стажеров)</Title>
        <ChartsGrid>
          <Chart data={dataApplicationsForInterns} colors={colors} textArray={['заявка', 'заявки', 'заявок']}
                 description={'всего заявок на стажеров за месяц'} header={'Количество заявок'}
                 mainInfo={sumOfApplications} size={'small'} gridColumn={'span 8 / span 8'} type={'bar'}/>
          <Chart data={dataEducation} colors={colors}
                 description={'самый часто встречающийся уровень образования среди заявок на стажеров'}
                 header={'Образование'}
                 mainInfo={popularEducation} size={'large'} gridColumn={'span 4 / span 4'}/>
        </ChartsGrid>
      </Block>
    </div>
  )
}

export default App
