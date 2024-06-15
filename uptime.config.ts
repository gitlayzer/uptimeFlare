const pageConfig = {
  // Title for your status page
  title: "Gitlayzer's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/gitlayzer', label: 'GitHub', highlight: true },
    { link: 'https://blog.devops-engineer.com.cn', label: 'Blog', highlight: true },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed.
  kvWriteCooldownMinutes: 3,
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'blog',
      // `name` is used at status page and callback message
      name: 'Gitlayze`s Blog',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://blog.devops-engineer.com.cn',
      // [OPTIONAL] `tooltip` is ONLY used at status page to show a tooltip
      tooltip: 'Gitlayze`s Blog',
      // [OPTIONAL] `statusPageLink` is ONLY used for clickable link at status page
      statusPageLink: 'https://blog.devops-engineer.com.cn',
      // [OPTIONAL] `expectedCodes` is an array of acceptable HTTP response codes, if not specified, default to 2xx
      expectedCodes: [200],
      // [OPTIONAL] `timeout` in millisecond, if not specified, default to 10000
      timeout: 10000,
    },
    {
      id: 'www',
      name: 'Gitlayze`s Blog`s CNAME',
      method: 'GET',
      target: 'https://www.devops-engineer.com.cn',
      tooltip: 'Gitlayze`s Blog',
      statusPageLink: 'https://www.devops-engineer.com.cn',
      timeout: 5000,
    },
    {
      id: 'registry',
      name: 'Gitlayzer`s Image Acceleration',
      method: 'GET',
      target: 'https://registry.devops-engineer.com.cn',
      tooltip: 'Image Acceleration',
      statusPageLink: 'https://registry.devops-engineer.com.cn',
      timeout: 5000,
    },
    {
      id: 'picture',
      name: 'Gitlayze`s Picture bed',
      method: 'GET',
      target: 'https://picture.devops-engineer.com.cn',
      tooltip: 'Gitlayze`s Picture bed',
      statusPageLink: 'https://picture.devops-engineer.com.cn',
      timeout: 5000,
    },
    {
      id: 'linux',
      name: 'Gitlayze`s Linux Commands',
      method: 'GET',
      target: 'https://linux.devops-engineer.com.cn',
      tooltip: 'Gitlayze`s Linux Commands',
      statusPageLink: 'https://linux.devops-engineer.com.cn',
      timeout: 5000,
    },
    {
      id: 'dbdesign',
      name: 'Gitlayze`s DBdesign',
      method: 'GET',
      target: 'https://dbdesign.devops-engineer.com.cn',
      tooltip: 'Gitlayze`s DBdesign',
      statusPageLink: 'https://dbdesign.devops-engineer.com.cn',
      timeout: 5000,
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
