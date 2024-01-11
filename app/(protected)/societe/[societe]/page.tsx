import { getSocieteById } from "@/data/societes";

const PageSocieteId = async ({
  params: { societeId },
}: {
  params: { societeId: string }
}) => {


  const societe = await getSocieteById(societeId);
 
  if(!societe) {
    return (
      <>
        <p>Cette societé n`&apos;`existe pas...</p>
      </>
    )
  }

  return (
    <>
      <p>{societeId}</p>
      {JSON.stringify(societe)}
    </>
  );
}

export default PageSocieteId;