import { Description } from '../Description'
import { Summary } from '../Summary'
import { Title } from '../Title'
import successIllustration from '../../../../../assets/success-illustration.svg'

export function SuccessSummary() {
  return (
    <section className={`flex justify-between`}>
      <div>
        <Title />
        <Description />
        <Summary />
      </div>
      <img src={successIllustration} alt="" />
    </section>
  )
}
