import DateFormater from '../components/date-formater'
import CoverImage from '../components/cover-image'



export default function PostHeader({ title, coverImage, date }) {
  return (
    <>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-xl md:text-2xl leading-relaxed lg:text-3xl font-bold text-gray-700">
          {title}
        </h1>
        <div className="mb-6 text-md text-gray-600">
          <DateFormater dateString={date} />
        </div>
        <div className="mb-6 mx-5 sm:mx-0">
          <CoverImage title={title} src={coverImage} slug />
        </div>
      </div>
    </>
  )
}
