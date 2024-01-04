import React, {useEffect, useRef} from 'react';
import {useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {Modal} from 'react-native-paper';
import LottieView from 'lottie-react-native';

const ModalLoadingLottie = () => {
  const lottieRef = useRef<any>(null);
  const isLoading = useSelector((state: any) => state.Config.isLoading);

  useEffect(() => {
    if (isLoading) {
      lottieRef.current?.play();
    } else {
      lottieRef.current?.reset();
    }
  }, [isLoading]);

  return (
    <Modal contentContainerStyle={stylesLoading.modal} visible={isLoading}>
      <LottieView
        ref={lottieRef}
        source={require('@assets/lotties/AnimationLottie.json')}
        style={stylesLoading.lottieView}
      />
    </Modal>
  );
};

export default ModalLoadingLottie;

const stylesLoading = StyleSheet.create({
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',
    borderRadius: 40,
    backgroundColor: 'white',
  },
  lottieView: {
    width: 250,
    height: 200,
    marginLeft: 10,
  },
});
