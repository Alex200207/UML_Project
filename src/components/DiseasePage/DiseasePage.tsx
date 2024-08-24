import React from "react";
import { useParams } from "react-router-dom";
import "../../index.css";
import cancerImage from "../../assets/images/chiche.jpg";
import cancerImage2 from "../../assets/images/chiche2.jpg";


const DiseasePage: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  const diseaseInfo: {
    [key: string]: {
      title: string;
      description: string;
      imageUrl: string;
      title2: string;
      descripcion2: string[];
      descripcion3: string;
      title3: string;
      imageUrl2: string;
    };
  } = {
    cancer: {
      imageUrl: cancerImage,
      title: "Cáncer de Mama",
      description: `El cáncer de mama es un tipo de cáncer que comienza como una proliferación de células en el tejido mamario.

            Después del cáncer de piel, el cáncer de mama es el tipo más común diagnosticado en mujeres en Estados Unidos. Sin embargo, este tipo de cáncer no solo se desarrolla en las mujeres. Todas las personas nacen con un poco de tejido mamario, por lo que cualquiera puede desarrollar cáncer de mama.
            
            Las tasas de supervivencia del cáncer de mama están en aumento, y la cantidad de personas que fallecen a causa del cáncer de mama baja constantemente. En gran parte, esto se debe al amplio apoyo a la concientización sobre el cáncer de mama y la financiación de investigaciones relacionadas.
            
            Los avances en los exámenes de detección del cáncer de mama les permiten a los profesionales de atención médica diagnosticar esta enfermedad más temprano, lo que aumenta las probabilidades de curarlo. Incluso cuando el cáncer de mama no se puede curar, existen muchos tratamientos para prolongar la vida. Los nuevos descubrimientos de las investigaciones sobre el cáncer de mama ayudan a los profesionales de atención médica a elegir los planes de tratamiento más eficaces.`,
      title2: "Síntomas",
      descripcion2: [
        "Bulto mamario o bulto en la axila que es duro, tiene bordes irregulares y generalmente no duele.",
        "Cambio del tamaño, forma o textura de las mamas o el pezón. Por ejemplo, se puede presentar enrojecimiento, agujeros o fruncimiento que luce como cáscara de naranja.",
        "Líquido del pezón. Este puede ser sanguinolento, de claro a amarillento o verdoso, o lucir como pus.",
        "En los hombres, los síntomas de cáncer de mama incluyen bulto mamario, dolor y sensibilidad en las mamas.",
        "Dolor óseo",
        "Dificultad respiratoria",
        "Hinchazón de los ganglios linfáticos en la axila (próxima a la mama con cáncer)",
        "Pérdida de peso",
      ],
      title3: "Pruebas y exámenes",
      descripcion3: `
Su proveedor le preguntará acerca de sus síntomas y factores de riesgo. Luego llevará a cabo un examen físico. El examen incluye ambas mamas, las axilas y la zona del cuello y del tórax.

Las mujeres pueden elegir realizarse el autoexamen de mamas todos los meses. Sin embargo, la efectividad de los autoexámenes para detectar el cáncer de mama es discutible.`,
      imageUrl2: cancerImage2,
    },
    diabetes: {
      imageUrl: "Descripción general",
      title: "Diabetes descripción general",
      description: `La diabetes mellitus se refiere a un grupo de enfermedades que afecta la forma en que el cuerpo utiliza la glucosa en la sangre. La glucosa es una importante fuente de energía para las células que forman los músculos y tejidos. También es la principal fuente de combustible del cerebro.

      La causa principal de la diabetes varía según el tipo. Pero, independientemente del tipo de diabetes que tengas, puede provocar un exceso de glucosa en la sangre. Demasiada glucosa en la sangre puede causar problemas de salud graves.

      Las afecciones de diabetes crónica comprenden diabetes tipo 1 y diabetes tipo 2. Las afecciones de diabetes potencialmente reversibles incluyen prediabetes y diabetes gestacional. La prediabetes ocurre cuando tus niveles de glucosa en la sangre son más elevados de lo normal. Pero esos niveles de glucosa en la sangre no son tan altos como para ser denominados diabetes. La prediabetes puede convertirse en diabetes, a no ser que se tomen medidas para prevenirla.
      La diabetes gestacional ocurre durante el embarazo, pero puede desaparecer después de que el bebé nace.`,
      title2: "Síntomas",
      descripcion2: [
        "Más sed de lo habitual.",
        "Micción frecuente.",
        "Pérdida de peso involuntaria.",
        "Presencia de cetonas en la orina. Las cetonas son un producto secundario de la descomposición de músculo y grasa que ocurre cuando no hay suficiente insulina.",
        "Sensación de cansancio y debilidad.",
        "Sensación de irritabilidad u otros cambios en el estado de ánimo.",
        "Visión borrosa.",
        "Llagas que tardan en cicatrizar.",
        "Infecciones frecuentes, como en las encías, la piel o la vagina.",
      ],
      descripcion3: `Los síntomas de la diabetes dependen del nivel de glucosa sanguínea. Es posible que algunas personas no presenten síntomas, especialmente si tienen prediabetes, diabetes gestacional o diabetes tipo 2. En el caso de la diabetes tipo 1, los síntomas tienden a aparecer rápido y a ser más intensos.`,
      title3: "",
      imageUrl2: "",
    },
    // Add more diseases as needed...
  };

  const info = diseaseInfo[name || ""] || {
    title: "Enfermedad no encontrada",
    description: "",
    title2: "",
    descripcion2: [],
  };

  return (
    <div className="container mt-4">
      <h1 className="infoh">{info.title}</h1>
      <p className="infop">{info.description}</p>
      <h2 className="infoh">{info.title2}</h2>
      <ul className="infop">
        {info.descripcion2.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {info.imageUrl && (
        <img
          src={info.imageUrl}
          alt={info.title}
          className="img-fluid mb-4 infoI"
        />
      )}
      <h2 className="infoh">{info.title3}</h2>
      <p className="infop">{info.descripcion3}</p>
      {info.imageUrl2 && (
        <img
          src={info.imageUrl2}
          alt={info.title}
          className="img-fluid mb-4 infoI"
        />
      )}
    </div>
  );
};

export default DiseasePage;
