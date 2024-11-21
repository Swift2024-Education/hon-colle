import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { user_id, user_name } = req.body; // クライアントから送られるデータを取得

    if (!user_id || !user_name) {
      return res.status(400).json({ error: 'user_id and user_name are required' });
    }

    try {
      // Prisma を使用してユーザー名を更新
      const changeName = await prisma.user.update({
        where: {
          id: user_id,
        },
        data: {
          name: user_name,
        },
      });

      // 成功した場合のレスポンス
      return res.status(200).json({ message: 'UserName updated successfully', changeName });
    } catch (error) {
      console.error('Failed to Update UserName:', error);
      return res.status(500).json({ error: 'Failed to update user name' });
    }
  } else {
    // POST メソッド以外は許可しない
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
