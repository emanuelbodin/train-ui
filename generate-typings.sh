# Load environment variables from .env file
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# Fetch microservice openapi specs and generate typings
curl $TRAFIKVERKET_SERVICE_URL/openapi.json | \
  npx openapi-typescript -o server/typings/trafikverket.d.ts
