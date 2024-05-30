import { PrismaClient } from '@prisma/client'
import { withPulse } from '@prisma/extension-pulse'

const prisma = new PrismaClient()
  .$extends(
    withPulse({
      apiKey: process.env['DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMGIzMGY3ZTctMWM4Ny00MTdiLWE5YjctZGJlMmRhNjY4MmNhIiwidGVuYW50X2lkIjoiNmMzMTcwNGRhMTI3ODI5ODI2NzE3OWNmYjJlMDhjYjY2ZDEzOTVkZGFjMGRiMTM3MDE2YWE1MTRiNGVjMDVlYSIsImludGVybmFsX3NlY3JldCI6Ijg0ZGRhNGMzLTMzY2YtNDI3Zi04NTVmLTg3MzQ5YWQ4NDE2ZSJ9.kzMzIe93LhIMBKMSQyKTjegc-Kjc6k-kZFZJB6FnKCA"'] as string
    })
  )

export { prisma }