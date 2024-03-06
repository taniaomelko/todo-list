import { ReportHandler } from 'web-vitals'

const reportWebVitals = async (onPerfEntry?: ReportHandler): Promise<void> => {
  try {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
      const webVitals = await import('web-vitals')
      const { getCLS, getFID, getFCP, getLCP, getTTFB } = webVitals
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    }
  } catch (error) {
    throw new Error(`Error in reportWebVitals: ${error}`)
  }
}

export default reportWebVitals
