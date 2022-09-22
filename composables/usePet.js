export async function usePet() {
	const { getItemById } = useDirectusItems()
	const route = useRoute()

	const pet = await getItemById({ collection: 'Pets', id: route.params.id })
	if (!pet) throwError('Pet persona not found, 404')

	return pet
}
