import { FeedbackHeader, Tittle } from './Section.styled'

export const Section = ({ tittle, children}) => {
    return (
        <FeedbackHeader>
            <Tittle>{tittle}</Tittle>
            {children}
        </FeedbackHeader>
    )
}
