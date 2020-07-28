import firestore from '@react-native-firebase/firestore';

export const getCollection = async (collection: string) => {
  const data = await firestore().collection(collection).get();

  return data.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
