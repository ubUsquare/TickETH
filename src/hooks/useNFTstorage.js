import { NFTStorage } from "nft.storage";

const client = new NFTStorage({
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZDNDc0QzlkNDBFQ2E2ZjhlZDMxODc5NDhhRmMwMjU1ODhBNDBiQzYiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwNzcxOTQxODg4MCwibmFtZSI6Ik1lcm4tTkZULU1hcmtldHBsYWNlIn0.ZZ6Em2xWnFeGJmS7rdp0gZJjSNmVYc6Oojbsv96ngLI",
});

const UploadMetadata = async (metadata) => {
  try {
    const response = await client.store({
      name: metadata.name,
      description: metadata.description,
      image: metadata.image,
      properties: metadata.properties,
      category: metadata.category,
    });
    return response;
  } catch (error) {
    console.error(error + " in UploadMetadata (useNFTstorage)");
  }
};

export { UploadMetadata };
