export async function usePets() {
	const { getItems } = useDirectusItems()
	const pets = await getItems({ collection: 'Pets' })
	return pets
}
