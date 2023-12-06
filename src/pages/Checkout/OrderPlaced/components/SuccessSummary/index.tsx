import { Description } from '../Description'
import { Summary } from '../Summary'
import { Title } from '../Title'
import successIllustration from '../../../../../assets/success-illustration.svg'

export function SummarySuccess() {
  return (
    <section>
      <div>
        <Title />
        <Description />
        <Summary />
      </div>
      <img src={successIllustration} alt="" />
    </section>
  )
}
