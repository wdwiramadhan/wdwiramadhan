type Props = {
  content: string;
};

export default function PostBody({ content }: Props) {
  return (
    <div className="max-w-3xl text-base leading-relaxed text-gray-700 mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
