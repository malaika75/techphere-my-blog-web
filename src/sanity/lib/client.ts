import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token: 'skNjTurYnKdQ6MTDsAxRP3iOYNFMgGT9FbllDZijA4TlMeRBwaCrDYAhl5qwOQfPVgo17yN3kPckabIcGV4Kf0BsKjGyIRqETRilO37eLickJYmfRVhXoACLHrwHLqQkuirSGfXpVS9u3KeiZFH9qwDxLrs57PpHItZLnJ1sVGXmtT2zBrLe',
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
