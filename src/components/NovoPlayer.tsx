import React, { FunctionComponent } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore
import faker from 'faker/locale/pt_BR';

const useStyles = makeStyles((theme) => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: 'translateZ(0)',
    '@media all and (-ms-high-contrast: none)': {
      display: 'none',
    },
  },
  modal: {
    display: 'flex',
    padding: theme.spacing(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const NovoPlayer: FunctionComponent<{
  handleAceitar: (nomeIntegrante: string) => void;
  handleRecusar: () => void;
}> = ({ handleAceitar, handleRecusar }) => {
  const classes = useStyles();
  const nomeNovoIntegrante = faker.name.firstName();

  const handleClickBotoes = (aceitar: boolean) => (): void => {
    if (aceitar) {
      handleAceitar(nomeNovoIntegrante);
    } else {
      handleRecusar();
    }
  };

  return (
    <div className={classes.root}>
      <Modal
        aria-labelledby='modal-title'
        aria-describedby='modal-description'
        closeAfterTransition
        open
        className={classes.modal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in>
          <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
            <div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
              <div className='sm:flex sm:items-start'>
                <div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10'>
                  <svg
                    className='h-6 w-6 text-yellow-600'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
                    />
                  </svg>
                </div>
                <div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
                  <h3
                    className='text-lg leading-6 font-medium text-gray-900'
                    id='modal-headline'
                  >
                    {`${nomeNovoIntegrante} está pedindo para ingressar!`}
                  </h3>
                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      {`${nomeNovoIntegrante} pediu para participar da sua conversa por vídeo.
                        Você pode aceitar ou recusar a presença dele(a) nos botões abaixo.`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
              <button
                type='button'
                onClick={handleClickBotoes(false)}
                className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'
              >
                Recusar
              </button>
              <button
                type='button'
                onClick={handleClickBotoes(true)}
                className='mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
              >
                Aceitar
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};
export default NovoPlayer;
