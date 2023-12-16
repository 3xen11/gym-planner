import AppButton from '@/src/components/appButton';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <AppButton title={'Dieta'} link={'/diet'} />
      <AppButton title={'Ćwiczenia'} link={'/exercises'} />
      <AppButton title={'Zakupy'} link={'/shopping'} />
    </div>
  );
}
