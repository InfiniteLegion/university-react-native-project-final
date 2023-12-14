import { ScrollView, Text, View } from "react-native";

import defaultStyles from './styles';
import Avatar from "@app/components/Avatar/Avatar";

function AboutUsDisplay() {
  const styles = defaultStyles();
  const headDepartmentImg = require('@app/assets/img/trius.jpeg');

  return (
    <>
      <ScrollView contentContainerStyle={styles.root}>
        <Text style={styles.title}>
          Кафедру комп’ютерних наук та системного аналізу (КНСА)
        </Text>
        <View>
          <Avatar
            source={headDepartmentImg}
            size={100}
            label={'Завідувач кафедри\n Триус Ю. В.'}
          />
        </View>
        <View style={styles.texts}>
          <Text>
            Було створено за наказом ректора Черкаського державного технологічного
            університету №236/01 від 3.07.2014 на базі кафедри комп’ютерних технологій.
          </Text>
          <Text>
            Завідувач кафедри комп’ютерних наук та системного аналізу Триус Юрій Васильович,
            професор, доктор педагогічних наук, кандидат фізико-математичних наук.
          </Text>
          <Text>
            Кафедра КНСА здійснює підготовку зі спеціальності 122 – комп’ютерні науки за освітніми програмами
            для бакалаврів: «Комп’ютерні науки та прикладне програмування»,
            для магістрів «Управління стартапами і проєктами в галузі інформаційних технологій»,
            для докторів філософії: “Комп’ютерні науки”, а також зі спеціальності
            124 – системний аналіз за освітніми програмами для бакалаврів «Системний аналіз
            і прикладна логістика», «Штучний інтелект», для магістрів «Системи і методи прийняття рішень».
          </Text>
          <Text>
            Бакалаври і магістри з цих спеціальностей готуються як фахівці широкого
            профілю для ІТ-галузі та різноманітних сфер діяльності людини,
            що володіють фундаментальними знаннями з вищої математики, програмування,
            баз даних і знань, а також вміннями проектування і розробки інформаційних систем,
            систем підтримки прийняття рішень, систем штучного інтелекту з використанням
            сучасних засобів ІКТ і мов програмування, web-орієнтованих, мобільних і
            хмарних технологій. Інструментарій фахівця з інформаційних технологій
            і системного аналітика: методи математичного і комп’ютерного моделювання,
            системного аналізу та оптимізації, штучного інтелекту, системи комп’ютерної математики,
            технології програмування, планування, прогнозування і прийняття рішень, а також досвід та інтуїція.
          </Text>
        </View>
      </ScrollView>
    </>
  )
}

export default AboutUsDisplay;