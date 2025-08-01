import { Progress } from '@/src/components/ui';

const ProgressPreview = () => {
    return (
        <>
            <div className='relative flex flex-col gap-2.5 w-full mb-5 last:mb-0'>
                <Progress value={25} />
                <Progress value={50} />
                <Progress value={75} />
                <Progress value={100} />
            </div>

            <div className='flex flex-wrap gap-5 w-full'>
                <Progress type='circle' value={25} />
                <Progress type='circle' value={50} />
                <Progress type='circle' value={75} />
                <Progress type='circle' value={100} />
            </div>
        </>
    );
};

export default ProgressPreview;
