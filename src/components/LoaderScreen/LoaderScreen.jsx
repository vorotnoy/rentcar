import { Bars } from 'react-loading-icons';
import s from './LoaderScreen.module.scss';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/selectors/loadersSelectors';

export const Loader = () => {
    const isLoading = useSelector(selectIsLoading);

    return (
        isLoading && (
            <div className={s.LoaderContainer}>
                <Bars className={s.Bars} />
                <h2 className={s.LoadingText}>Loading...</h2>
            </div>
        )
    );
};
