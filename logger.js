const isProduction=process.env.NODE_ENV==='production';

const logger={
        log:(...args)=>{
if(!isProduction)
{
    console.log(...args)
}
        },
        warn:(...args)=>{
            if(!isProduction)
                {
                    console.warn(...args)
                }
        },
        error:(...args)=>{
            if(!isProduction)
                {
                    console.error(...args)
                }
        }
    
};
logger.log('This is a log msg')
logger.warn('This is a log warn msg')
logger.error('This is a log error msg')